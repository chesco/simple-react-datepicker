var Weeks = React.createClass({
    getInitialState: function() {
        return {
            view: DateUtilities.clone(this.props.view),
            other: DateUtilities.clone(this.props.view),
            sliding: null
        };
    },

    componentDidMount: function() {
        this.refs.current.getDOMNode().addEventListener("transitionend", this.onTransitionEnd);
    },

    onTransitionEnd: function() {
        this.setState({
            sliding: null,
            view: DateUtilities.clone(this.state.other)
        });

        this.props.onTransitionEnd();
    },

    getWeekStartDates: function(view) {
        view.setDate(1);
        view = DateUtilities.moveToDayOfWeek(DateUtilities.clone(view), 0);

        var current = DateUtilities.clone(view);
        current.setDate(current.getDate()+7);

        var starts = [view],
            month = current.getMonth();

        while (current.getMonth() === month) {
            starts.push(DateUtilities.clone(current));
            current.setDate(current.getDate()+7);
        }

        return starts;
    },

    moveTo: function(view, isForward) {
        this.setState({
            sliding: isForward ? "left" : "right",
            other: DateUtilities.clone(view)
        });
    },

    render: function() {
        return React.createElement("div", {className: "weeks"},
            React.createElement("div", {ref: "current", className: "current" + (this.state.sliding ? (" sliding " + this.state.sliding) : "")},
                this.renderWeeks(this.state.view)
            ),

            React.createElement("div", {ref: "other", className: "other" + (this.state.sliding ? (" sliding " + this.state.sliding) : "")},
                this.renderWeeks(this.state.other)
            )
        );
    },

    renderWeeks: function(view) {
        var starts = this.getWeekStartDates(view),
            month = starts[1].getMonth();

        return starts.map(function(s, i) {
            return React.createElement(Week, {key: i, start: s, month: month, selected: this.props.selected, onSelect: this.props.onSelect, minDate: this.props.minDate, maxDate: this.props.maxDate});
        }.bind(this));
    }
});
