import { useNavigate } from "react-router-dom";
function Button() {
    const navigate = useNavigate();
    function handleClick() {
      navigate("/register")
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }
 export default Button;

// function useLogoutTimer() {
//   const userIsInactive = useFakeInactiveUser();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (userIsInactive) {
//       fake.logout();
//       navigate("/session-timed-out");
//     }
//   }, [userIsInactive]);
// }