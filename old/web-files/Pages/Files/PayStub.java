package assignment;

import java.util.Scanner;

/**
 * A program that will calculate the paycheck of an employee based on their
 * specific inputs.
 * 
 * @author Timothy C.
 * @version 9.6.18
 * 
 * 
 */
public class PayStub {
    private static final double VACATION_RATE = 8.25;
    private static final double RETIREMENT_RATE = 0.052;
    private static final double TAX_RATE = 0.280;

    private static int currentYear = 2018;
    private static int currentMonth = 9;

    private static String fullName;
    private static int hireMonth;
    private static int hireYear;
    private static int workHours;
    private static String title;
    private static double payRate;

    /**
     * calculates the vacation hours the user has given the starting year and
     * month.
     * 
     * @param year  of employee hiring
     * @param month of employee hiring
     * 
     * @return total vacation hours
     */
    public static double monthsWorked(int year, int month) {
        double temp;
        temp = (currentYear - year) * 12;
        temp += currentMonth - month;
        return temp;
    }

    /**
     * the main method running the PayStub class.
     * 
     * @param args input
     * 
     */
    public static void main(String[] args) {

        // Initialize scanner,
        Scanner scan;
        scan = new Scanner(System.in);

        // get user name
        System.out.print("Enter your Fullname: ");
        fullName = scan.nextLine();

        // get user hire month
        System.out.print("Enter your Anniversary Month(1-12): ");
        hireMonth = scan.nextInt();
        scan.nextLine();

        // get user hire year
        System.out.print("Enter your Anniversary Year: ");
        hireYear = scan.nextInt();
        scan.nextLine();

        // get user work hours
        System.out.print("Enter your hours worked this pay period(0-350): ");
        workHours = scan.nextInt();
        // throw-away scan to get next line
        scan.nextLine();

        // get user title
        System.out.print("Enter your Job Title: ");
        title = scan.nextLine();

        // get user hourly pay rate
        System.out.print("Enter your pay rate: ");
        payRate = scan.nextDouble();
        scan.nextLine();

        // close to save resources
        scan.close();

        System.out.println("\n");

        System.out.println("==========================================");
        System.out.println("      Gekko & Co.");
        System.out.println("");
        System.out.println("          \"$\"");
        System.out.println("          ~~~");
        System.out.println("         /  \\ `.");
        System.out.println("        /    \\  /");
        System.out.println("       /_ _ _ \\/");
        System.out.println("");
        System.out.println("------------------------------------------");

        System.out
                .println("Pay Period:     " + currentMonth + "/" + currentYear);

        System.out.println("Name:           " + fullName);
        System.out.println("Title:          " + title);
        System.out.println("Anniversary:    " + hireMonth + "/" + hireYear);
        System.out.println("Months Worked:  "
                + (int) monthsWorked(hireYear, hireMonth) + " months");

        System.out.printf("Vacation hours: %.2f\n",
                monthsWorked(hireYear, hireMonth) * VACATION_RATE);

        System.out.println("------------------------------------------");

        double grossPay = workHours * payRate;
        double retireTax = RETIREMENT_RATE * grossPay;
        double userTax = TAX_RATE * (grossPay - retireTax);
        double netPay = grossPay - (userTax + retireTax);

        System.out.printf("Gross Pay:     $%7.2f\n", grossPay);
        System.out.printf("Retirement:    $%7.2f\n", retireTax);
        System.out.printf("Tax:           $%7.2f\n", userTax);
        System.out.println("------------------------");
        System.out.printf("Net Pay:       $%7.2f\n", netPay);
        System.out.println("==========================================");

    }

}
