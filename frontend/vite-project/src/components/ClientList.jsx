import { useEffect, useState } from "react";
import { fetchClients } from "../api";

function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      const data = await fetchClients();
      setClients(data);
    };
    getClients();
  }, []);

  return (
    <div className="App">
      <h1>Client Data</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Client ID</th>
            <th>Name</th>
            <th>Mobile No</th>
            <th>Case Location</th>
            <th>Product SubCategory</th>
            <th>Status</th>
            <th>Challenges</th>
            <th>Data Tracker</th>
            <th>Referral Source</th>
            <th>Client Loc</th>
            <th>Client Age</th>
            <th>Lead Date</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Time Spent</th>
            <th>Claim Amount</th>
            <th>Fees Charged</th>
            <th>Agent Charge</th>
            <th>Documents</th>
            <th>Tasks</th>
            <th>Followup Date</th>
            <th>Assign Issue Stage</th>
            <th>Priority</th>
            <th>Future Scope</th>
            <th>Email</th>
            <th>Invoice Link</th>
            <th>Form 15G Link</th>
            <th>Engagement Letter Link</th>
            <th>PF Office</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.ClientId}>
              <td>{client.ClientId}</td>
              <td>{client.Name}</td>
              <td>{client.MobileNo}</td>
              <td>{client.CaseLocation}</td>
              <td>{client.ProductSubCategory}</td>
              <td>{client.Status}</td>
              <td>{client.Challenges}</td>
              <td>{client.DataTracker}</td>
              <td>{client.ReferralSource}</td>
              <td>{client.ClientLoc}</td>
              <td>{client.ClientAge}</td>
              <td>{client.LeadDate}</td>
              <td>{client.StartDate}</td>
              <td>{client.EndDate}</td>
              <td>{client.TimeSpent}</td>
              <td>{client.ClaimAmount}</td>
              <td>{client.FeesCharged}</td>
              <td>{client.AgentCharge}</td>
              <td>{client.Documents.join(", ")}</td>
              <td>{client.Tasks.join(", ")}</td>
              <td>{client.FollowupDate}</td>
              <td>{client.AssignIssueStage.join(", ")}</td>
              <td>{client.Priority}</td>
              <td>{client.FutureScope}</td>
              <td>{client.Email}</td>
              <td>{client.InvoiceLink}</td>
              <td>{client.Form15GLink}</td>
              <td>{client.EngagementLetterLink}</td>
              <td>{client.PFOffice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
