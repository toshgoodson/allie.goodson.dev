/* eslint-disable no-nested-ternary */
export default function clamp(value, min, max) {
  return max && value > max ? max : min && value < min ? min : value;
}
