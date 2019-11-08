import React from "react";

const StepTwo = props => {
  const back = () => {
    props.prev();
  };

  return (
    <form>
      <label htmlFor="dealership_name">
        <input
          type="text"
          id="dealership_name"
          name="dealership_name"
          value={props.value.dealership_name}
          onChange={props.handleChange}
        />
      </label>
      <label htmlFor="dealership_street">
        <input
          type="text"
          id="dealership_street"
          name="dealership_street"
          value={props.value.dealership_street}
          onChange={props.handleChange}
        />
      </label>
      <label htmlFor="dealership_city">
        <input
          type="text"
          id="dealership_city"
          name="dealership_city"
          value={props.value.dealership_city}
          onChange={props.handleChange}
        />
      </label>
      <label htmlFor="dealership_state">
        <select name="state" id="dealership_state">
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
      </label>

      <label htmlFor="dealership_country">
        <input
          type="text"
          id="dealership_country"
          name="dealership_country"
          value={props.value.dealership_country}
          onChange={props.handleChange}
        />
      </label>

      <label htmlFor="dealership_zipcode">
        <input
          type="text"
          id="dealership_zipcode"
          name="dealership_zipcode"
          value={props.value.dealership_zipcode}
          onChange={props.handleChange}
        />
      </label>

      <button onClick={back}>Back</button>
      <button onClick={props.handleSubmit}>Submit</button>
    </form>
  );
};

export default StepTwo;
