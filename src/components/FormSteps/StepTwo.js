import React from "react";

const StepTwo = props => {
  const back = () => {
    props.prev();
  };

  return (
    <>
      <form className="signup-stepTwo">
        <input
          type="text"
          id="dealership_name"
          name="dealer_name"
          value={props.value.dealer_name}
          onChange={props.handleChange}
          placeholder="Dealership Name..."
        />

        <input
          type="text"
          id="dealership_street"
          name="dealer_street"
          value={props.value.dealer_street}
          onChange={props.handleChange}
          placeholder="Street..."
        />

        <input
          type="text"
          id="dealership_city"
          name="dealer_city"
          value={props.value.dealer_city}
          onChange={props.handleChange}
          placeholder="City..."
        />

        <select
          name="dealer_state"
          id="dealership_state"
          onChange={props.handleChange}
        >
          <option>State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>

        <input
          type="text"
          id="dealership_country"
          name="dealer_country"
          value={props.value.dealer_country}
          onChange={props.handleChange}
          placeholder="Country..."
        />

        <label htmlFor="dealership_zipcode">
          <input
            type="text"
            id="dealership_zipcode"
            name="dealer_zipcode"
            value={props.value.dealer_zipcode}
            onChange={props.handleChange}
            placeholder="Zip Code..."
          />
        </label>

        <input
          type="checkbox"
          id="dealership_type"
          checked
          name="dealer_type"
          value={props.value.dealer_type}
          onChange={props.handleChange}
          placeholder="Type"
        />

        {/* <div className="btn-container">
          <button onClick={back} className="button backBtn">
            Back
          </button>
          {props.value.dealer_name.length === 0 ||
          props.value.dealer_street.length === 0 ||
          props.value.dealer_city.length === 0 ||
          props.value.dealer_state.length === 0 ||
          props.value.dealer_country.length === 0 ||
          props.value.dealer_zipcode.length === 0 ? (
            <button
              disabled
              onClick={props.handleSubmit}
              className="button stepTwodisabledBtn"
            >
              Submit
            </button>
          ) : (
            <button
              type="submit"
              onClick={props.handleSubmit}
              className="button submitBtn"
            >
              Submit
            </button>
          )}
        </div> */}
      </form>
      <div className="btn-container">
        <button onClick={back} className="button backBtn">
          Back
        </button>
        {props.value.dealer_name.length === 0 ||
        props.value.dealer_street.length === 0 ||
        props.value.dealer_city.length === 0 ||
        props.value.dealer_state.length === 0 ||
        props.value.dealer_country.length === 0 ||
        props.value.dealer_zipcode.length === 0 ? (
          <button
            disabled
            onClick={props.handleSubmit}
            className="button stepTwodisabledBtn"
          >
            Submit
          </button>
        ) : (
          <button
            type="submit"
            onClick={props.handleSubmit}
            className="button submitBtn"
          >
            Submit
          </button>
        )}
      </div>
    </>
  );
};

export default StepTwo;
