window.ReviewsIndex = React.createClass({
    render: function() {
        var reviews = [];
        for(var i = 0; i < this.props.reviews.length; ++i) {
            reviews.push(
                <tr key={this.props.reviews[i].id}>
                    <td>{this.props.reviews[i].name}</td>
                    <td>{this.props.reviews[i].rating}</td>
                    <td>
                        <a href={this.props.reviews[i].show_path}>Show</a>
                    </td>
                    <td>
                        <a href={this.props.reviews[i].edit_path}>Edit</a>
                    </td>
                    <td>
                        <a href={this.props.reviews[i].destroy_path} data-method="DELETE" data-confirm="Are you sure?">Destroy</a>
                    </td>
                </tr>
            );
        }

        return (
            <div className="index-bg">
                <h1 className="header">Kaytlin's Reviews</h1>
                <p id="notice">{this.props.notice}</p>
                <table className="table">
                    <tbody>
                    {reviews}
                    </tbody>
                </table>
                <br />
                <a href={this.props.new_review_path} className="btn btn-warning btn-block btn-lg">New</a>
            </div>
        );
    }
});