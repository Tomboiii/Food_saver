import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import ErrorMessage from "../Components/ErrorMessage";
import { ToastFailure, ToastSuccess } from "../Components/Toast";
import { useNavigate } from "react-router-dom";
import DatepickerField from "./DatepickerField";
import UploadImage from "./UploadImage";

const validationSchema = yup.object().shape({
  Name: yup.string().required().label("Name"),
  ExpiryDate: yup.string().required().label("Expiry Date"),
  NotifyDate: yup.string().required().label("Notifcation Date"),
  ImageSrc: yup.mixed().required(),
});

function AddFood() {
  const navigate = useNavigate();
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        Name: "",
        ExpiryDate: "",
        NotifyDate: "",
        ImageSrc: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        console.log(values);
      }}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Container>
          <Box>
            <Section2>
              <Form style={{ height: "100%" }}>
                <MainHeading>Add Food</MainHeading>

                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    padding: "2% 0% 0% 0%",
                  }}
                >
                  <TextField type="text" name="Name" placeholder="Name" />
                  {errors.Name && touched.Name && (
                    <ErrorMessage error={errors.Name} />
                  )}
                  <DatepickerField
                    name="ExpiryDate"
                    title={"Pick Expiry date :"}
                  />
                  {errors.ExpiryDate && touched.ExpiryDate && (
                    <ErrorMessage error={errors.ExpiryDate} />
                  )}
                  <DatepickerField
                    name="NotifyDate"
                    title={"Pick Notification date"}
                  />
                  {errors.NotifyDate && touched.NotifyDate && (
                    <ErrorMessage error={errors.NotifyDate} />
                  )}
                  <UploadImage
                    name={"ImageSrc"}
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                  {errors.ImageSrc && touched.ImageSrc && (
                    <ErrorMessage error={errors.ImageSrc} />
                  )}
                  <Button type="submit">Add Food</Button>
                </div>
              </Form>
            </Section2>
          </Box>
        </Container>
      )}
    </Formik>
  );
}

export default AddFood;

const Container = styled.div`
  background-color: #f9eee2;
  height: 100%;
  width: 100%;
`;

const Box = styled.div`
  position: absolute;
  inset: 0;
  border: 1px solid #f3d3b7;

  margin: 2% 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section2 = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2% 0%;
  width: 100%;
`;

const TextField = styled(Field)`
  margin: 0% 20%;
  padding: 15px 10px;
  background-color: #f9eee2;
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #f3d3b7;
  padding: 10px;
  margin: 0% 20%;
`;

const MainHeading = styled.h1`
  font-size: 2.5rem;
  color: #8e4404;
  font-style: italic;
  font-weight: 900;
  width: 100%;
  text-align: center;
`;
