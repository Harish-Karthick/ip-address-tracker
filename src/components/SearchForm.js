import React from "react";
import ArrowIcon from "../images/icon-arrow.svg";
import classes from "../styles/SearchForm.module.css";

function SearchForm(props) {
  const formClassName = props.locationFound
    ? `${classes.searchForm} ${classes.searchFormLocation}`
    : `${classes.searchForm} ${classes.searchFormFull}`;
  return (
    <form className={formClassName} onSubmit={props.handleSubmit}>
      <label htmlFor='ipAddress' className={classes.formLabel}>
        IP Address Tracker
      </label>
      <div>
        <input
          type='text'
          name='ipAddress'
          id='ipAddress'
          placeholder='Search for any IP address or domain'
          value={props.ipValue}
          onChange={props.handleChange}
          className={classes.formInput}
        />
        <button>
          <img src={ArrowIcon} alt='Submit button.' />
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
