import cn from "./index.module.css";
import cx from "classnames";

function Switch({ onChange, className, checked }) {
  return (
    <label className={cx(className, cn.switch)}>
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span className={cx(cn.slider, cn.round)}></span>
    </label>
  );
}

export default Switch;
