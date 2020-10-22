<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;
use App\Http\Requests\addReq;

class ProductController extends Controller
{
    //

    public function index(){
        $data = Product::all();
        return response()->json($data, 200);
    }

    public function show($id){
        $data = Product::find($id);
        if($data){
            return response()->json($data,200);
        }else{
            return 'False.....';
        }
        
    }

    public function create(addReq $req){
        $data = Product::create($req->all());

        return response()->json($data);
    }

    public function destroy($id){
        $find = Product::find($id);
        if($find){
            $data = $find->delete();
            return response()->json($data,200);
        }else{
            return 'False....';
        }
        
    }

    public function update(Request $req, $id){
        $find = Product::find($id);
        if($find){
            $data = $find->update($req->all());
            return response()->json($data);
        }else{
            return 'False.....';
        }
    }
}
