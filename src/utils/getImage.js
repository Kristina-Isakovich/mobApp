import Q0 from "../../assets/img/q_0.png";
import Q1 from "../../assets/img/q_1.png";
import Q2 from "../../assets/img/q_2.png";

export const getImage = (id) => {
  switch (id) {
    case 0:
      return Q0
      break
    case 1:
      return Q1
      break;
    case 2:
      return Q2
      break;
  }
}
