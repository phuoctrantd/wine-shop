import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TRACKING } from "../constants/regex";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
function Tracking() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      tracking: "",
    },
    validationSchema: Yup.object({
      tracking: Yup.string()
        .required("Bắt buộc phải nhập mã vận đơn ")
        .matches(TRACKING, "Mã vận đơn phải là số")
        .min(10, "Vận đơn quá ngắn")
        .max(13, "Vận đơn quá dài"),
    }),
    onSubmit: (tracking) => {
      history.push("/tracking/"+  Object.values(tracking));
    },
  });

  return (
    
    <div>
      <Helmet>
        <title>Tra cứu vận đơn</title>
      </Helmet>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <h1 className="text--upper">VẬN ĐƠN</h1>
            <input
              className="inputformtracking"
              type="tel"
              placeholder="Ví dụ: 841000072647"
              onChange={formik.handleChange}
              value={formik.values.tracking}
              name="tracking"
            />
            {formik.errors.tracking && (
              <p className="errorMsg errorchekout ">{formik.errors.tracking}</p>
            )}
          </div>
        </div>
        <div className="cart__group-button">
          <button className="buttontracking" to="/" type="submit">
            Tra cứu vận đơn
          </button>
        </div>
      </form>
    </div>
  );
}

export default Tracking;
