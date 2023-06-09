
import {React, useEffect, useState}  from "react"
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom"


import Dashboard from './pages/Dashboard/Dashboard';
import UserNotFound from "./pages/UserNotFound/UserNotFound";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

/**
 * Route Manager, redirect to another page with react router
 * @returns React Router Element
 */
function RoutesManager() {
  return (
    <Router>
      <div className="App">
        <div className="inner">
          <Routes>
            <Route exact path="/" element={ <PageNotFound/> }/>
            <Route exact path="/mock/:id" element={ <UserExistCheck mocked = {true} />}/>
            <Route path="user/:id" element={<UserExistCheck mocked = {false} />} />

            <Route path='*' element={ <PageNotFound /> }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default RoutesManager;

/**
 * Check if user exist and redirect to dashboard if true, otherwise it redirect to UserNotFound page
 * @param {*} param0 mocked boolean
 * @returns 
 */
const UserExistCheck = ({mocked}) => {
  const [user, setUser] = useState()

  let params = useParams();

  const fetchData = () => {
    fetch(`http://localhost:3000/user/${params.id}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUser(data)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  if (typeof(user) === "object") {
    return (<Dashboard id={params.id} mocked={mocked}/>)
  } else {
    return (<UserNotFound />)
  }
}