package com.ruhack2022.qrecipe.data;

public class Repository {

    public static Repository instance;

    private Repository() {
    }

    public static Repository getInstance() {
        if (instance == null) {
            instance = new Repository();
        }

        return instance;
    }


}
