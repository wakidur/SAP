
class Email implements IPrintable  {
    String form;
    String to;
    String subject;
    String body;

    String getSubject() {
        return this.subject;
    }
    String getFrom() {
        return this.form;
    }
    String getTo() {
        return this.to;
    }
    String getBody() {
        return this.body;
    }

    public String getContent() {
        String total;
        total += email.getSubject();
        total += email.getFrom();
        total += email.getTo();
        total += email.getBody();
    }
}

interface IPrintable {
    String getContent();
}
interface IPrinter {
     print( IPrintable printable)
}

class Printer implements IPrinter {
    print( IPrintable printable ) {
        String content = printable.getContent();
        // print content;
    }
}

class Program {
    private IPrinter printer;
    public Prigram(Iprinter printer) {
        this.printer = printer;
    }

    public void run(ArrayList<IPrintable> list) {
        for( int i = 0; i < list.length; i++) {
            IPrintable intem = list.getItem(i);
            printer.print(item);
        }
    }

    public static voic main( String[] args) {
        ArrayList<IPrintable> list = new ArrayList<IPrintable>();
        Printer printer = new Printer();
        list.add( new Invoice() );
        list.add( new Email() );
        Program program = new Program(printer);
    }
}