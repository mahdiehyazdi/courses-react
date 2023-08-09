const filters = ["All", "Active", "Completed", "UnCompleted"];
export default function Filter() {
    return (
        <div>
            <h4>FILTER</h4>
            <div className="product__filter__item">
                {filters.map((filter) => {
                    return (
                        <div key={filter}>
                            <input type="radio" checked="checked" name="radio" />
                            <span className="checkmark"></span>
                            <label>{filter} </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
