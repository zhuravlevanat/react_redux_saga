import nodemailer from 'nodemailer';
import { JSDOM } from 'jsdom';
import * as Diff from 'diff';

async function sendEmails(data, receivers) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'db.changing.logs@gmail.com',
            pass: 'mailing12@',
        },
    });

    let info = await transporter.sendMail({
        from: 'db.changing.logs@gmail.com',
        to: receivers,
        subject: 'Changes to table person',
        html: createEmailBody(data),
    });

    console.log('Message sent: %s', info.messageId);
}

function createEmailBody(data) {
    const dom = new JSDOM(
        '<html>' +
        '<head></head>' +
        '<body></body>' +
        '</html>',
    );
    const table = dom.window.document.createElement('table');
    table.style.border = '1px solid black';
    table.innerHTML = `<tr>
                                <th>Time</th>
                                <th>Version</th>
                                <th>Val</th>
                                <th>Change val</th>
                                <th>User</th>
                                <th>Old value / New value</th>
                           </tr>`;

    for (let i = 0; i < data.length; i++) {
        const tr = dom.window.document.createElement('tr');
        tr.innerHTML = `
                <td style="border-top:1px solid black;">${data[i].time}</td>
                <td style="border-top:1px solid black;">${data[i].version}</td>
                <td style="border-top:1px solid black;">${data[i].val}</td>
                <td style="border-top:1px solid black;">${data[i].change_val}</td>
                <td style="border-top:1px solid black;">${data[i].user}</td>
                <td style="border-top:1px solid black;">${markValues(data[i].old_value, data[i].new_value)}</td>
            `;
        table.innerHTML += tr.outerHTML;
    }
    return table.outerHTML;
}

function markValues(oldValue, newValue) {
    const diff = Diff.diffChars(oldValue, newValue);
    let color = '';
    let textDecoration = '';

    const marked = diff.map((part) => {
        if (part.added) {
            color = '#d4fcbc';
            textDecoration = 'none';
        } else if (part.removed) {
            color = '#fbb6c2';
            textDecoration = 'line-through';
        } else {
            color = '#ffffff';
            textDecoration = 'none';
        }

        return `<span style="background:${color};text-decoration:${textDecoration};">${part.value}</span>`;
    });

    return marked.join('');
}

export default sendEmails;