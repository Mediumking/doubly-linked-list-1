const Node = require('./node');

class LinkedList {
    constructor() 
    {
        this.Tail=null;
        this.Head=null;
        this.lenght=0;
    }

    append(data) 
    {
        var temp=new Node(this.Tail,data,null);
        this.Tail.next=temp;
        this.Tail=temp;
        length++;
        return this;
    }

    head() 
    {
        return Head.data;
    }

    tail() 
    {
        return Tail.data;
    }

    at(index) 
    {
        var temp = Head;
        for( var i = 0; i < index; i++ )
        {
            Node = Node.next;
        }
        return Node.data;
    }

    insertAt(index, data) 
    {
        if(index>length+1)
            throw new Error(message.failure);
        if(index<0)
            throw new Error(message.failure);
        var temp=Head;
        for(var i=0; i<index; i++)
        {
            temp=temp.next;
        }
        var NodeInsert=new Node(temp,data,temp.next);
        temp.next.prev=NodeInsert;
        temp.prev.next=NodeInsert;
    }

    isEmpty() 
    {
        if(this.Head == null && this.Tail == null)
            return true;
        else return false;
    }

    clear() 
    {
        this.Head=null;
        this.Tail=null;
        this.length=0;
        return this;
    }

    deleteAt(index) 
    {
        if(index < 0 || index > length)
            throw new Error(message.failure);
        var temp=this.Head;
        for(var i = 0; i < index; i++)
            temp=temp.next;
        temp.prev.next=temp.next;
        temp.next.prev=temp.prev;
        return this;
    }

    reverse() 
    {
    if(this.isEmpty())
        return this;
    var reversed= new LinkedList();
    var NodeReversed=this.Tail;
    reversed.append(this.Tail.data);
    while(NodeReserved!=null)
    {
        reversed.append(NodeReversed.data)
        NodeReversed=NodeReversed.prev;
    }
    return reversed;
    }

    indexOf(data) 
    {
        var IndexOf=new Node();
        var answer,flag;
        while(IndexOf!=null)
        {
            if(IndexOf.data==data);
            answer = data
            flag++;
            IndexOf=IndexOf.next;
        }
        if(flag==0)
            alert("No such data");
        else return answer;
    }
}

module.exports = LinkedList;
