package assignment;

import java.util.Scanner;

/**
 * 
 * @author Timothy C.
 * @version 10:37:06 AM Nov 4, 2018
 */

public class PhraseGame {

    /**
     * 
     * @param args Command Line Arguments
     */

    public static void main(String[] args) {

        int numTotalGuesses;
        numTotalGuesses = 5; // You can change this input for testing

        String secretPhrase;
        secretPhrase = "Can't stop the feeling";
        // You can change this input for testing

        playGame(secretPhrase, numTotalGuesses);

    }

    /**
     * 
     * @param secretPhrase    the hidden phrase that needs to be guessed
     * @param numTotalGuesses the number of times the player can guess
     */

    public static void playGame(String secretPhrase, int numTotalGuesses) {

        Scanner scan = new Scanner(System.in);

        String guessed = "";
        String input;

        int exitType = 0;
        int turn = 0;
        int incorrect = 0;

        for (int i = 0; i < numTotalGuesses + turn; i++) {

            System.out.println();
            drawScoreboard(numTotalGuesses, incorrect);

            System.out.println("Secret Phrase:   "
                    + getDisplaySecretPhrase(secretPhrase, guessed));

            displayGuessedLetters(guessed);

            System.out.println(
                    "Enter a letter to guess or \"!\" to end the game");

            input = scan.nextLine().toLowerCase();

            if (input.equals("!")) {
                exitType = -1;
                break;
            }

            if (!guessed.contains(input)) {

                if (!Character.isLetter(input.charAt(0))) {

                    System.out.println("Not a valid guess!");
                    turn++;

                } else {

                    guessed += input;

                    if (!secretPhrase.toLowerCase().contains(input)) {

                        System.out.println(
                                "No, " + input + " is not in the phrase");

                        incorrect++;

                    } else {

                        turn++;

                    }
                }
            } else {

                System.out.println("You already guessed " + input);
                turn++;

            }

            if (!getDisplaySecretPhrase(secretPhrase, guessed).contains("-")) {

                exitType = 1;
                break;
            }

        }
        if (exitType == 0) {
            drawScoreboard(numTotalGuesses, incorrect);
            System.out.println("\n=======================================");
            System.out.println("No more guesses left. Game over!");
            System.out.println("The phrase was \"" + secretPhrase + "\"");
            System.out.println("=======================================");

        } else if (exitType == 1) {

            System.out.println("=======================================");
            System.out.println("You won!");
            System.out.println("The phrase was \"" + secretPhrase + "\"");
            System.out.println("=======================================");

        } else {

            System.out.println("=======================================");
            System.out.println("Game ended early");
            System.out.println("=======================================");

        }

        scan.close();
    }

    /**
     * 
     * @param guessedLetters what letters have already been guessed
     */

    public static void displayGuessedLetters(String guessedLetters) {
        System.out.print("Guessed Letters: ");

        for (int i = 0; i < guessedLetters.length(); i++) {

            System.out.print(guessedLetters.charAt(i));

            if (i != guessedLetters.length() - 1) {
                System.out.print(", ");
            }
        }
        System.out.println();
    }

    /**
     * 
     * @param secretPhrase   the phrase the user needs to guess
     * @param lettersGuessed how many letters did the user guess
     * @return the phrase with unguessed letters blanked out
     */

    public static String getDisplaySecretPhrase(String secretPhrase,
            String lettersGuessed) {

        String display = "";

        for (int i = 0; i < secretPhrase.length(); i++) {

            if (Character.isLetter(secretPhrase.charAt(i))) {

                if (lettersGuessed.contains(Character
                        .toString(secretPhrase.toLowerCase().charAt(i)))) {

                    display += secretPhrase.charAt(i);
                } else {

                    display += "-";
                }
            } else {

                display += secretPhrase.charAt(i);
            }
        }

        return display;
    }

    /**
     * 
     * 
     * @param length number of boxes drawn total
     * @return top or bottom line
     */

    private static String drawLine(int length) {

        String str = "+";

        for (int i = 0; i < length; i++) {
            str += "-----+";
        }

        str += "\n";

        return str;
    }

    /**
     * 
     * @return empty
     */

    private static String drawEmptyBox() {
        return "     |";
    }

    /**
     * 
     * @param line which part of the incorrect line
     * @return string
     */

    private static String drawIncorrect(int line) {
        String str;
        if (line == 1) {
            str = "\\\\ /" + "/|";
        } else if (line == 2) {
            str = " \\V/ |";
        } else if (line == 3) {
            str = " /.\\ |";
        } else {
            str = "// \\\\|";
        }
        return str;
    }

    /**
     * 
     * @param totalGuesses     number of boxes drawn
     * @param incorrectGuesses number of boxes filled with X's
     */

    public static void drawScoreboard(int totalGuesses, int incorrectGuesses) {

        String board = drawLine(totalGuesses);
        int[] score = new int[totalGuesses];

        if (totalGuesses >= incorrectGuesses) {

            for (int i = 0; i < incorrectGuesses; i++) {
                score[i] = 1;
            }

            for (int y = 1; y < 5; y++) {

                board += "|";

                for (int x = 0; x < score.length; x++) {

                    if (score[x] == 1) {
                        board += drawIncorrect(y);
                    } else {
                        board += drawEmptyBox();
                    }

                }
                board += "\n";
            }

            board += drawLine(totalGuesses);
            System.out.print(board);

        } else {

            System.out.println(
                    "ERROR: incorrect guesses greater than number of guesses");

        }
    }

}
