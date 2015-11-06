package magia;

import java.io.*;
import java.net.URL;

/**
 * Created by toni on 05/11/15.
 */
public class Collector {

    //5141
    public static void main(String[] args) throws IOException {
        int cont = 0;

        for(int i=53177199; i < 99999999; i += 100) {
            PrintWriter printWriter = new PrintWriter(new FileOutputStream("faces", true));
            String urlPath = "https://intranet.upv.es/foto/get/" + i + ".gif";

            URL url = new URL(urlPath);

            InputStream is = url.openConnection().getInputStream();

            byte[] buffer = new byte[8192];
            int bytesRead;
            ByteArrayOutputStream output = new ByteArrayOutputStream();
            while ((bytesRead = is.read(buffer)) != -1)
            {
                output.write(buffer, 0, bytesRead);
            }

            if (output.toByteArray().length != 5372){
                printWriter.write(i + "abc");
                printWriter.close();
                System.out.println(cont++ + " id: "+i);
            }
        }
    }

}
