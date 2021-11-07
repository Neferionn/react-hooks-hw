import ItemList from "./ItemList";
import InputForm from "./InputForm";

const Container = () => {
  return (
    <div className="fluid-container d-flex justify-content-center row gx-0 mb-5">
      <div className="mt-5 col-sm-12 col-md-8 col-lg-6 mx-auto">
        <h1 className="text-center display-1 pb-2 text-info">ToDo List</h1>

        <InputForm />
        <ItemList />
      </div>
    </div>
  );
};

export default Container;
