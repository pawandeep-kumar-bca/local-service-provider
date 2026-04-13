import StatusBadge from "./components/common/StatusBadge";



const App = () => {
  return (
   
 <span className="w-full h-screen flex items-center justify-center gap-2">
  <StatusBadge children='Active' badge="active"/>
  <StatusBadge children='Inactive' badge="inactive"/>
  <StatusBadge children='Pending' badge="pending"/>
  <StatusBadge children='Completed' badge="completed"/>
  <StatusBadge children='Failed' badge="failed"/>
 </span>
  );
};

export default App;
