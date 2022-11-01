import { connect } from "react-redux";
import { mapStateToProps } from "./store/mapStateToProps";
import { mapDispatchToProps } from "./store/mapDispatchToProps";
import { Presentational } from "./Presentational";

export const App = connect(mapStateToProps, mapDispatchToProps)(Presentational);
