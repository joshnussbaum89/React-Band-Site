const TourDates = ({ tourDates }) => {
    const tourDatesList = tourDates.map((item, index) => {
        return (
            <li key={index}>
                <span>
                    {item.date} {item.venue}
                </span>
                <button>Tickets</button>
            </li>
        );
    })
    return (
        <>
            <ul className="tour-dates">
                {tourDatesList}
            </ul>
        </>
    )
}

export default TourDates
