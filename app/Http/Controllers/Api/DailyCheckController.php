<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DailyCheck;
use App\Http\Resources\DailyCheckResource;
use App\Http\Requests\DailyCheckRequest;

class DailyCheckController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return DailyCheckResource::collection(DailyCheck::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DailyCheckRequest $request)
    {
        $dailyItem = DailyCheck::create($request->validated());

        return new DailyCheckResource($dailyItem);
    }

    /**
     * Display the specified resource.
     */
    public function show(DailyCheck $dailyCheck)
    {
        return new DailyCheckResource($dailyCheck);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DailyCheckRequest $request, DailyCheck $dailyItem)
    {
        $dailyItem->update($request->validated());

        return new DailyCheckResource($dailyItem);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DailyCheck $dailyCheck)
    {
        $dailyCheck->delete();

        return response()->noContent();
    }
}
