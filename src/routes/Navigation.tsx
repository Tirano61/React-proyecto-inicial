import { BrowserRouter, Navigate } from "react-router-dom"
import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../logo.svg";
import { RegisterPage } from "../03-forms/pages/RegisterPage";
import { FormikBasicPage,FormikYupPage, FormikComponents,RegisterFormikPage, FormikAbstractation, DynamicFormPage } from "../03-forms/pages";



export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        
        <nav>
          <img className="image1" src={ logo } alt="logo" />
          <ul>
            <li>
              <NavLink to="/formik-basic" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/register" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstractation" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Abstractation</NavLink>
            </li>
            <li>
              <NavLink to="/register-formik" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Register Formik Page</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Dynamic Form</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          
          <Route path="formik-basic" element={ <FormikBasicPage /> }/>
          <Route path="formik-yup" element={ <FormikYupPage /> }/>
          <Route path="formik-components" element={ <FormikComponents /> }/>
          <Route path="formik-abstractation" element={ <FormikAbstractation /> }/>
          <Route path="register" element={ <RegisterPage /> }/>
          <Route path="register-formik" element={ <RegisterFormikPage /> }/>
          <Route path="dynamic-form" element={ <DynamicFormPage /> }/>
          <Route path="/*" element={ <Navigate to="/home" replace /> }/>

        </Routes>

      </div>
    </BrowserRouter>
  )
}
