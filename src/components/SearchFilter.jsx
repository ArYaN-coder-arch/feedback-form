function SearchFilter({

  search,

  setSearch,

  date,

  setDate

}) {

  return (

    <div className="glass-card filter-box">

      <input

        type="text"

        placeholder="Search by name, email, phone or message"

        value={search}

        onChange={(e) => setSearch(e.target.value)}

      />

      <input

        type="date"

        value={date}

        onChange={(e) => setDate(e.target.value)}

      />

    </div>

  );

}

export default SearchFilter;