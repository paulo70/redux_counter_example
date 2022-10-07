 import { connect } from "react-redux"
 import { increment, decrement } from "../store/actions/counter"
 const Counter = ({count, increment, decrement}) => {
    return(
      <>
         <h1>counter: {count}</h1>
         <button onClick={increment}>increment</button>
         <button onClick={decrement}>decrement</button>
      </>
    )
 }

 const mapStateToProps = state => ({
    count: state.counter.count
 })

 const mapDispatchToProps = dispatch => ({
   increment: () => dispatch(increment()),
   decrement: () =>  dispatch(decrement())
 })

 export default connect(mapStateToProps, mapDispatchToProps) (Counter)