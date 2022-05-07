package com.ruhack2022.qrecipe.ui.main;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.TextView;

import com.ruhack2022.qrecipe.R;

public class MainActivity extends AppCompatActivity {

    private MainActivityViewModel viewModel;
    private ImageButton QRCodeBTN;
    private ImageButton recipeHistoryBTN;
    private TextView methodInput;
    private TextView ingredientInput;
    private Button addMethodsBTN;
    private RecyclerView recipeRecyclerView;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}