

function Meetings() {
    return (
        <>
            This is the meetings page
            {/* tab links */}
            {/* routes to show one of search-filter / add */}
            <Route path="/meetings/add">
                <AddMeetings />
            </Route>
            <Route path="/meetings/">
                <SearchFilterMeetings />
            </Route>
        </>
    )
}