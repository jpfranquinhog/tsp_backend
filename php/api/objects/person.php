<?php
class Person
{
    // database connection and table name
    private $conn;
    private $table_name = "pessoa";

    // object properties
    public $id;
    public $email;
    public $password;

    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // read persons
    public function read()
    {
        // select all query
        $query = "SELECT * FROM {$this->table_name}";
        // prepare query statement
        $statement = $this->conn->prepare($query);
        // execute query
        $statement->execute();
        return $statement;
    }     
    public function delete()
    {
        // select all query
        $query = "DELETE FROM {$this->table_name} WHERE id={$this->table_name}";
        // prepare query statement
        
        // execute query
        if($this->conn->prepare($query)->execute()){
            return true;
        }else{
            return false;
        }
    }                    
}
