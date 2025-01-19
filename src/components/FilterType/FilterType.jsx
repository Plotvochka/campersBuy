import { Field, Form, Formik } from "formik";
import css from "./FilterType.module.css";
import Icon from "../Icon/Icon.jsx";
import Button from "../Button/Button.jsx";
import clsx from "clsx";

const FilterType = () => {
  const initialValues = {
    location: "",
    equipment: [],
    type: "",
  };

  const handleSubmit = () => {};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className={css.wrap}>
          <p className={css.text}>Filters</p>
          <div id="checkbox-group" className={css.title}>
            Vehicle equipment
          </div>
          <hr />
          <div
            role="group"
            aria-labelledby="checkbox-group"
            className={css.wrapCheck}
          >
            <label
              className={clsx(
                css.check,
                values.equipment.includes("AC") ? css.active : undefined
              )}
            >
              <Field
                type="checkbox"
                name="equipment"
                value="AC"
                className={css.input}
              />
              <Icon id="icon-wind" width="32" height="32" />
              AC
            </label>
            <label
              className={clsx(
                css.check,
                values.equipment.includes("Automatic") ? css.active : undefined
              )}
            >
              <Field
                type="checkbox"
                name="equipment"
                value="Automatic"
                className={css.input}
              />
              <Icon id="icon-diagram" width="32" height="32" />
              <p>Automatic</p>
            </label>
            <label
              className={clsx(
                css.check,
                values.equipment.includes("Kitchen") ? css.active : undefined
              )}
            >
              <Field
                type="checkbox"
                name="equipment"
                value="Kitchen"
                className={css.input}
              />
              <Icon id="icon-cup-hot" width="32" height="32" />
              Kitchen
            </label>
            <label
              className={clsx(
                css.check,
                values.equipment.includes("TV") ? css.active : undefined
              )}
            >
              <Field
                type="checkbox"
                name="equipment"
                value="TV"
                className={css.input}
              />
              <Icon id="icon-tv" width="32" height="32" />
              TV
            </label>
            <label
              className={clsx(
                css.check,
                values.equipment.includes("Bathroom") ? css.active : undefined
              )}
            >
              <Field
                type="checkbox"
                name="equipment"
                value="Bathroom"
                className={css.input}
              />
              <Icon id="icon-shower" width="32" height="32" />
              Bathroom
            </label>
            <label
              className={clsx(
                css.check,
                values.equipment.includes("Petrol") ? css.active : undefined
              )}
            >
              <Field
                type="checkbox"
                name="equipment"
                value="Petrol"
                className={css.input}
              />
              <Icon id="icon-fuel-pump" width="32" height="32" />
              Petrol
            </label>
            <label
              className={clsx(
                css.check,
                values.equipment.includes("Refrigerator")
                  ? css.active
                  : undefined
              )}
            >
              <Field
                type="checkbox"
                name="equipment"
                value="Refrigerator"
                className={css.input}
              />
              <Icon id="icon-fridge" width="32" height="32" />
              Refrigerator
            </label>
            <label
              className={clsx(
                css.check,
                values.equipment.includes("Microwave") ? css.active : undefined
              )}
            >
              <Field
                type="checkbox"
                name="equipment"
                value="Microwave"
                className={css.input}
              />
              <Icon id="icon-microwave" width="32" height="32" />
              Microwave
            </label>
            <label
              className={clsx(
                css.check,
                values.equipment.includes("Gas") ? css.active : undefined
              )}
            >
              <Field
                type="checkbox"
                name="equipment"
                value="Gas"
                className={css.input}
              />
              <Icon id="icon-gas" width="32" height="32" />
              Gas
            </label>
            <label
              className={clsx(
                css.check,
                values.equipment.includes("Water") ? css.active : undefined
              )}
            >
              <Field
                type="checkbox"
                name="equipment"
                value="Water"
                className={css.input}
              />
              <Icon id="icon-water" width="32" height="32" />
              Water
            </label>
          </div>
          <div id="radio-group" className={css.title}>
            Vehicle type
          </div>
          <hr />
          <div
            role="group"
            aria-labelledby="radio-group"
            className={css.wrapCheck}
          >
            <label
              className={clsx(
                css.check,
                values.type === "Van" ? css.active : undefined
              )}
            >
              <Field
                type="radio"
                name="type"
                value="Van"
                className={css.input}
              />
              <Icon id="icon-grid-1x2" width="32" height="32" />
              Van
            </label>
            <label
              className={clsx(
                css.check,
                values.type === "Fully Integrated" ? css.active : undefined
              )}
              style={{ padding: "4px 18px" }}
            >
              <Field
                type="radio"
                name="type"
                value="Fully Integrated"
                className={css.input}
              />
              <Icon id="icon-grid" width="32" height="32" />
              Fully Integrated
            </label>
            <label
              className={clsx(
                css.check,
                values.type === "Alcove" ? css.active : undefined
              )}
            >
              <Field
                type="radio"
                name="type"
                value="Alcove"
                className={css.input}
              />
              <Icon id="icon-grid-3x3" width="32" height="32" />
              Alcove
            </label>
          </div>
          <Button type="submit" className={css.btn}>
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterType;
