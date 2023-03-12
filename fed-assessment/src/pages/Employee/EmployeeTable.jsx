import React from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { FaSort, FaSortDown, FaSortUp, FaSearch } from "react-icons/fa";

const EmployeeTable = () => {
  const [defaultEmpData, setDefaultEmpData] = React.useState([]);
  const [employee, setEmployee] = React.useState([]);

  const [resultLimit, setResultLimit] = React.useState(5);
  const [isUpdateEmployee, setIsUpdateEmployee] = React.useState(false);

  const [sortBy, setSortBy] = React.useState("");
  const [sortType, setSortType] = React.useState("default");
  //search States
  const [sId, setSId] = React.useState(0);
  const [sFullName, setSFullName] = React.useState("");
  const [sdepartment, setSdepartment] = React.useState("");
  const [sDesignation, setSDesignation] = React.useState("");
  const [sPhone, setSPhone] = React.useState("");
  const [sBDate, setSBDate] = React.useState("");

  const BASEURL = "https://dummyjson.com/users";

  React.useEffect(() => {
    axios.get(BASEURL + `?limit=${resultLimit}`).then((res) => {
      let modified = res.data.users.map((e, i, s) => {
        return {
          ...res.data.users[i],
          fullName: e.firstName + " " + e.lastName,
        };
      });
      console.log(modified);
      setEmployee(modified);
      return res;
    });
  }, []);
  React.useEffect(() => {
    if (isUpdateEmployee) {
      setDefaultEmpData(employee);
    }
  }, [isUpdateEmployee]);

  const handleLoadMore = async () => {
    setResultLimit((prev) => prev + 5);
    let data = [];
    console.log(BASEURL + `?limit=${resultLimit + 5}`);

    axios.get(BASEURL + `?limit=${resultLimit + 5}`).then((res) => {
      let modified = res.data.users.map((e, i, s) => {
        return {
          ...res.data.users[i],
          fullName: e.firstName + " " + e.lastName,
        };
      });
      console.log(modified);
      setEmployee(modified);
      setDefaultEmpData(modified);
      return res;
    });
  };

  const handleSort = (param) => {
    // sort for designatoion and edaprtment
    if (param === "department" || param === "title") {
      if (sortType === "default") {
        employee.sort((first, second) => {
          if (first.company[param] > second.company[param]) return 1;
          else if (first.company[param] < second.company[param]) return -1;
          else return 0;
        });
        setSortType("ascending");
      } else if (sortType == "ascending") {
        employee.sort((first, second) => {
          if (first.company[param] < second.company[param]) return 1;
          else if (first.company[param] > second.company[param]) return -1;
          else return 0;
        });
        setSortType("descending");
      } else {
        setSortType("default");
      }
    } else if (sortType === "default") {
      employee.sort((first, second) => {
        if (first[param] > second[param]) return 1;
        else if (first[param] < second[param]) return -1;
        else return 0;
      });
      setSortType("ascending");
    } else if (sortType == "ascending") {
      employee.sort((first, second) => {
        if (first[param] < second[param]) return 1;
        else if (first[param] > second[param]) return -1;
        else return 0;
      });
      setSortType("descending");
    } else {
      setSortType("default");
    }
    setSortBy(param.toString());
    console.log(employee);
    setIsUpdateEmployee((isUpdateEmployee) => !isUpdateEmployee);
    setEmployee(employee);
    setIsUpdateEmployee((isUpdateEmployee) => !isUpdateEmployee);
  };

  const handleSearch = (param) => {
    console.log("Hello I searched something");

    const tempArray = employee.filter((emp, idx, self) => {
      switch (param) {
        case "id":
          return emp[param] === parseInt(sId);

        case "fullName":
          return emp[param].toLowerCase().search(sFullName) !== -1;

        case "department":
          return emp.company[param].toLowerCase().search(sdepartment) !== -1;
        case "title":
          return emp.company[param].toLowerCase().search(sDesignation) !== -1;
        case "birthDate":
          return emp[param].toLowerCase().search(sBDate) !== -1;
        case "phone":
          return emp[param].toLowerCase().search(sPhone) !== -1;

        default:
          break;
      }
    });

    // console.log("heelo");
    console.log(tempArray);
    setIsUpdateEmployee((isUpdateEmployee) => !isUpdateEmployee);
    setEmployee(tempArray);
    setIsUpdateEmployee((isUpdateEmployee) => !isUpdateEmployee);
  };

  return (
    <div className="employee__wrapper">
      <h3 className="employee__heading">Employee Table</h3>
      <div className="btn__wrapper">
        <button
          className="btn"
          onClick={() => {
            console.log(defaultEmpData);
            setEmployee(defaultEmpData);
            setSId(0);
            setSFullName("");
            setSdepartment("");
            setSDesignation("");
            setSPhone("");
            setSBDate("");
          }}
        >
          Reset Search
        </button>
        {/* --- Load More ---   */}
        <button className="emp btn" onClick={handleLoadMore}>
          Load More
        </button>
      </div>
      {/* --- Table Section Start---   */}
      <div className="employee__table">
        <Table responsive="lg" striped bordered hover>
          <thead>
            <tr>
              <th onClick={() => handleSort("id")}>
                {sortType === "descending" && sortBy === "id" ? (
                  <FaSortDown />
                ) : sortType === "ascending" && sortBy === "id" ? (
                  <FaSortUp />
                ) : (
                  <FaSort />
                )}
                Id
              </th>

              <th onClick={() => handleSort("fullName")}>
                {sortType === "descending" && sortBy === "lastName" ? (
                  <FaSortDown />
                ) : sortType === "ascending" && sortBy === "lastName" ? (
                  <FaSortUp />
                ) : (
                  <FaSort />
                )}
                Full Name
              </th>
              <th onClick={() => handleSort("department")}>
                {sortType === "descending" && sortBy === "department" ? (
                  <FaSortDown />
                ) : sortType === "ascending" && sortBy === "department" ? (
                  <FaSortUp />
                ) : (
                  <FaSort />
                )}
                department
              </th>
              <th onClick={() => handleSort("title")}>
                {sortType === "descending" && sortBy === "title" ? (
                  <FaSortDown />
                ) : sortType === "ascending" && sortBy === "title" ? (
                  <FaSortUp />
                ) : (
                  <FaSort />
                )}
                Designation
              </th>
              <th onClick={() => handleSort("birthDate")}>
                {sortType === "descending" && sortBy === "birthDate" ? (
                  <FaSortDown />
                ) : sortType === "ascending" && sortBy === "birthDate" ? (
                  <FaSortUp />
                ) : (
                  <FaSort />
                )}
                birth Date
              </th>
              <th onClick={() => handleSort("phone")}>
                {sortType === "descending" && sortBy === "phone" ? (
                  <FaSortDown />
                ) : sortType === "ascending" && sortBy === "phone" ? (
                  <FaSortUp />
                ) : (
                  <FaSort />
                )}
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="table__search">
              {/* {["id","fullName","department","title","birthDate","Phone"].map((field)=>{
                return 
            })} */}
              <td>
                <div className="search__wrapper">
                  <input onChange={(e) => setSId(e.target.value)} value={sId} />
                  <button onClick={() => handleSearch("id")}>
                    <FaSearch />
                  </button>
                </div>
              </td>

              <td>
                <div className="search__wrapper">
                  <input
                    onChange={(e) => setSFullName(e.target.value)}
                    value={sFullName}
                  />
                  <button onClick={() => handleSearch("fullName")}>
                    <FaSearch />
                  </button>
                </div>
              </td>
              <td>
                <div className="search__wrapper">
                  <input
                    onChange={(e) => setSdepartment(e.target.value)}
                    value={sdepartment}
                  />
                  <button onClick={() => handleSearch("department")}>
                    <FaSearch />
                  </button>
                </div>
              </td>
              <td>
                <div className="search__wrapper">
                  <input
                    onChange={(e) => setSDesignation(e.target.value)}
                    value={sDesignation}
                  />
                  <button onClick={() => handleSearch("title")}>
                    <FaSearch />
                  </button>
                </div>
              </td>

              <td>
                <div className="search__wrapper">
                  <input
                    onChange={(e) => setSBDate(e.target.value)}
                    value={sBDate}
                  />
                  <button onClick={() => handleSearch("birthDate")}>
                    <FaSearch />
                  </button>
                </div>
              </td>
              <td>
                <div className="search__wrapper">
                  <input
                    onChange={(e) => setSPhone(e.target.value)}
                    value={sPhone}
                  />
                  <button onClick={() => handleSearch("phone")}>
                    <FaSearch />
                  </button>
                </div>
              </td>
            </tr>
            {employee.length > 0 &&
              employee.map((emp, idx, self) => {
                return (
                  <tr>
                    <td>{emp.id}</td>
                    <td>{emp.fullName}</td>
                    <td>{emp.company.department}</td>
                    <td>{emp.company.title}</td>
                    <td>{emp.birthDate}</td>
                    <td>{emp.phone}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>

      {/* --- Table Section End---   */}
    </div>
  );
};

export default EmployeeTable;
