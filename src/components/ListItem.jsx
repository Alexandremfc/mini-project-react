import ItemSummary from "./ItemSummary";

function ItemList(props) {
  return (
    <div className="container">
      {props.content.map((ele) => {
        return (
          <ItemSummary
            key={ele.id}
            itemDetails={ele}
            callbackToDelete={props.callbackToDelete}
          />
        );
      })}
    </div>
  );
}
export default ItemList;
