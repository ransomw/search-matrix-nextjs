export default function contactsTable({
    contacts,
} : {
    contacts: {
        name: string, 
        email: string, 
        phone: string, 
        notes: string,
    }[]
}) {
    return (<div><h3>table</h3>
    <table>
    <thead>
    <tr>
        <th>name</th>
        <th>notes</th>
        <th>email</th>
        <th>phone</th>
    </tr>
    </thead>
    <tbody>
    {contacts.map((contact) => (
      <tr key={contact.email}>
        <td>{contact.name}</td>
        <td>{contact.notes}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    ))}
    </tbody>
    </table>
    </div>)
};