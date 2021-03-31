<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fleet extends Model
{
    use HasFactory;
    protected $guarded = [];

    protected $appends = ['photo_url'];

    public function getPhotoUrlAttribute()
    {
        return url('fleets/' . $this->photo);
    }
}
