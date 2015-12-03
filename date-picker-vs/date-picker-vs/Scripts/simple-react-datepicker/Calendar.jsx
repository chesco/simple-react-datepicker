var Calendar = React.createClass({
    onMove: function(view, isForward) {
        this.refs.weeks.moveTo(view, isForward);
    },
    onTransitionEnd: function() {
        this.refs.monthHeader.enable();
    },
    render: function() {

        var hidden;

        if(this.props.hidden){
            hidden = "calendar hidden";
        }
        else{
            hidden = "calendar";
        }

        return (<div className={hidden}>
            <MonthHeader
                ref="monthHeader"
                view={this.props.view}
                onMove={this.onMove} />
            <WeekHeader />
            <Weeks
                ref="weeks"
                view={this.props.view}
                selected={this.props.selected}
                onTransitionEnd={this.onTransitionEnd}
                onSelect={this.props.onSelect}
                minDate={this.props.minDate}
                maxDate={this.props.maxDate} />
        </div>);

    }
});
