import moment from "moment";

class Format {
  static date(d, format = "DD/MM/YYYY") {
    return moment(d).format(format);
  }

  static time(d, format = "hh:mma") {
    return moment(d).format(format);
  }
}

export { Format };
