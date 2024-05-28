import Table from '@/app/ui/contacts/table';

const contacts = [
    {name: 'alice', email: 'a@a.org', phone: '(555) 555 - 5555', notes: 'asdf'},
    {name: 'bob', email: 'b@b.org', phone: '(555) 555 - 5556', notes: 'qwer'}
]

export default function Page() {
    return (<div><h1>contacts</h1><Table contacts={contacts} /></div>)
}