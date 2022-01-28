/** @format */

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../config/env";
const defaultCourseState = {
  course: {
    info_user: {
      current_user: "",
      isRegister: false,
      progress: 0,
    },
    course_id: "",
    name_course: "",
    description: "",
    url_image: "",
    teacher: "",
    moduls: [],
    user_taken_course: 0,
    rangking: [],
  },
  isLoading: true,
  getAndSetCourseData: () => {},
  setIsLoading: () => {},
};

const CourseContext = createContext(defaultCourseState);

export const CourseProvider = ({ children }) => {
  const [course, setCourse] = useState(defaultCourseState);
  const [isLoading, setIsLoading] = useState(true);
  const [cookie] = useCookies();
  const param = useParams();

  const getAndSetCourseData = (course_id) => {
    setIsLoading(true);
    axios
      .get(`${BACKEND_URL}/api/v1/courses/${course_id}`, {
        headers: {
          Authorization: `Bearer ${cookie.userData.token}`,
        },
      })
      .then(function (response) {
        setCourse(response.data.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  useEffect(() => {
    getAndSetCourseData(param.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CourseContext.Provider
      value={{ course, isLoading, getAndSetCourseData, setIsLoading }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => useContext(CourseContext);
