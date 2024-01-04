<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Khsing\Faceid\Faceid;


class FaceRecognitionController extends Controller
{
    public function recognize(Request $request)
    {
        $image = $request->input('image'); 

        $faceid = new Faceid();
        $result = $faceid->facecompare($image);

        return response()->json($result);
    }
}
