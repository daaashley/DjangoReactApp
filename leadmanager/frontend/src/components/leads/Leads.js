import React, { Component, Fragment } from "react";
import { connect } from "react-redux"; //lets us connect to redux
import PropTypes from "prop-types";
import { getLeads, deleteLead } from "../../actions/leads";

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getLeads();
  }
  render() {
    return (
      <div>
        <Fragment>
          <h2>Leads</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.leads.map(lead => (
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.message}</td>
                  <td>
                    <button
                      onClick={this.props.deleteLead.bind(this, lead.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      </div>
    );
  }
}

//We are mapping the state of redux to props of this component i.e. 'this.props.leads'
const mapStateToProps = state => ({
  leads: state.leads.leads //we want leads reducer, then we grab the leads data
});

export default connect(
  mapStateToProps,
  { getLeads, deleteLead }
)(Leads); // We have to export connect to use it, allong with mapping function
