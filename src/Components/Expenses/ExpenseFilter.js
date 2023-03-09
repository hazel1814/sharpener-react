const ExpenseFilter = ({selected,onChangefilter}) => {
    

    const dropdownChangeHandler = (event) => {
        onChangefilter(event.target.value)
    }
    return (
        <div className="expense-filter">
            <div className="expense-filter__control">
                <label>Filter By Year</label>
                <select value={selected} onChange={dropdownChangeHandler}>

                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>

            </div>
        </div>
    )
}
export default ExpenseFilter