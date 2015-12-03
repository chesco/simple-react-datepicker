var DatePicker = React.createClass({

    getInitialState: function() {
        var def = this.props.selected || new Date();
        return {
            view: DateUtilities.clone(def),
            selected: DateUtilities.clone(def),
            minDate: null,
            maxDate: null,
            hidden: true
        };
    },
    componentDidMount: function() {
        document.addEventListener("click", function(e) {
            if (!this.state.hidden && e.target.className !== "date-picker-trigger" && !this.parentsHaveClassName(e.target, "date-picker"))
                this.hide();
        }.bind(this));
    },
    parentsHaveClassName: function(element, className) {
        var parent = element;
        while (parent) {
            if (parent.className && parent.className.indexOf(className) > -1)
                return true;

            parent = parent.parentNode;
        }
    },
    setMinDate: function(date) {
        this.setState({ minDate: date });
    },
    setMaxDate: function(date) {
        this.setState({ maxDate: date });
    },
    onSelect: function(day) {

        this.setState({ selected: day });

        //invoke external functions if needed by parent component
        test();

        this.hide();
    },
    show: function() {
        this.setState({ hidden: false });
    },
    hide: function() {
        this.setState({ hidden: true });
    },
    render: function() {

        return (<div className="ardp-date-picker pull-left">

            <input
                id={this.props.id}
                type="text"
                className="form-control date-picker-trigger datepicker-field"
                readOnly="true"
                onClick={this.show}
                value={DateUtilities.toString(this.state.selected)} />

            <Calendar
                hidden={this.state.hidden}
                view={this.state.view}
                selected={this.state.selected}
                onSelect={this.onSelect}
                minDate={this.state.minDate}
                maxDate={this.state.maxDate}/>

        </div>);
    }
});
