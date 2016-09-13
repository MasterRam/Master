package corp.lucy.fragmentdemoapp;



import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import corp.lucy.fragments.FirstFrgament;
import corp.lucy.fragments.SecondFrgment;

public class MainActivity extends AppCompatActivity {
    Button btn=null,btn2=null;
    Boolean status=false;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        btn=(Button) findViewById(R.id.SwipeFirstFragment);
        btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                android.app.FragmentManager fm=getFragmentManager();
                android.app.FragmentTransaction ft=fm.beginTransaction();
                if(!status)
                {
                    FirstFrgament f1=new FirstFrgament();
                    ft.addToBackStack(null);
                    ft.add(R.id.fragment_Container,f1);
                    ft.commit();
                    btn.setText("Load Next Fragment");
                    status=true;
                }

            }


        });
        btn2=(Button) findViewById(R.id.SwipeSecondFragment);
        btn2.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                android.app.FragmentManager fm=getFragmentManager();
                android.app.FragmentTransaction ft=fm.beginTransaction();

                    SecondFrgment f2=new SecondFrgment();
                    ft.add(R.id.fragment_Container,f2);
                    ft.commit();

                    status=false;

            }


        });
    }
}
