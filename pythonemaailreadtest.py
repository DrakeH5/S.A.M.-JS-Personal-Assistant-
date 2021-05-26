import imaplib
import base64
import time
email_user = input('Newbuild100@outlook.com')
email_pass = input('c0cac0la')

M = imaplib.IMAP4_SSL('imap-mail.outlook.com', 993)
M.login(email_user, email_pass)
M.select()

typ, message_numbers = M.search(None, 'ALL')  # change variable name, and use new name in for loop

for num in message_numbers[0].split():
    typ, data = M.fetch(num, '(RFC822)')
    # num1 = base64.b64decode(num)          # unnecessary, I think
    print(data)   # check what you've actually got. That will help with the next line
    data1 = base64.b64decode(data[0][1])
    print('Message %s\n%s\n' % (num, data1))
M.close()
M.logout()

