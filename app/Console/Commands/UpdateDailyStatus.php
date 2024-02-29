<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\DailyCheck;

class UpdateDailyStatus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:update-daily-status';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update status to 0 daily';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $dailyTasksToUpdate = DailyCheck::where('status', '!=', 0)->get();

        foreach($dailyTasksToUpdate as $dailyTask) {
            $dailyTask->status = 0;
            $dailyTask->save();
        }

        $this->info('Task status successfully updated!');

        return 0;
    }
}
