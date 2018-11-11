import React from 'react';
import { Route,NavLink, Redirect } from 'react-router-dom';
//Add Componenets
import CourseContainer from './courses/CourseContainer';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';


//The match object gives us access to the url the Route component is.
// We can use that url to avoid using slash or specify manually the path we use.
// See example on NavLink /courses/css and how it should be written.
const Courses = ({match}) => (
    <div className="main-content courses">
      <div className="course-header group">
        <h2>Courses</h2>
        <ul className="course-nav">
          <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
          <li><NavLink to='/courses/css'>CSS</NavLink></li>
          <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
        </ul>
      </div>

      {/* In the Route component, you need to specify match.path*/}
      <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/html`} /> } />
      <Route path={`${match.path}/html`} render={ () => <CourseContainer data={HTMLCourses}/> } />
      <Route path={`${match.path}/css`} render={ () => <CourseContainer data={CSSCourses}/> } />
      <Route path={`${match.path}/javascript`} render={ () => <CourseContainer data={JSCourses}/> } />
    </div>
);

export default Courses;
