const TourDates = ({ tourDates }) => {
    const tourDatesList = tourDates.map((item, index) => {
        return (
            <li key={index}>
                <div>
                    <strong>{item.venue}</strong>
                    <small>{item.date}</small>
                </div>
                <button>Tickets</button>
            </li>
        );
    })
    return (
        <ul className="tour-dates">
            {tourDatesList}
        </ul>
    )
}

export default TourDates
