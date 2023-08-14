const filters = ["All", "Active", "Completed", "UnCompleted"];
export default function Filter() {
    return (
        <div>
            <h4>FILTER</h4>
            <div className="product__filter__item">
                {filters.map((filter, index) => {
                    return (
                        <div key={index}>
                            <input type="radio" defaultChecked={index === 0} name="radio" />
                            <span className="checkmark"></span>
                            <label>{filter} </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
